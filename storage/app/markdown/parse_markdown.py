import time
from os import listdir

from py_module import (
    DEFAULT_PATH,
    LANGUAGES,
    LanguageNotFoundError,
    Color,
    File,
    HTML,
    CSS,
)

def get_class(language: str) -> File:
    language_class = {
        "HTML": HTML,
        "CSS": CSS,
        # "JavaScript": JavaScript,
        # "PHP": PHP,
        # "C": C,
        # "C++": Cpp,
        # "C#": CSharp,
        # "SQL": SQL,
        # "Ruby": Ruby,
        # "Python": Python,
        # "Java": Java
    }
    for _language, _class in language_class.items():
        if language == _language:
            return _class


def highlight_all():
    pending: list[File] = []

    for lang in LANGUAGES:
        try:
            files = [f for f in listdir(
                f"storage/app/markdown/course/{lang}/unhighlighted_html")]
            finished_files = [f for f in listdir(
                f"storage/app/markdown/course/{lang}/finished_html")]
        except FileNotFoundError:
            continue
        unfinished_files = [f for f in files if f not in finished_files]
        for unfinished_file in unfinished_files:
            f: File = File(unfinished_file, lang)
            pending.append(f)

    if len(pending) == 0:
        print("No files to highlight")

    for file in pending:
        start = time.time()
        file.highlight_code_block()
        file.save_as_highlighted()
        end = time.time()
        print(f"Highlighted {file.language}: {file.file_name} in {end - start:.10f} seconds")



def main():
    highlight_all()


if __name__ == "__main__":
    main()
