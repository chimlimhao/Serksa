from .classes import Color, File, LanguageNotFoundError

DEFAULT_PATH = "storage/app/markdown/course/"
LANGUAGES: dict[str, list[str]] = {
    "HTML": ["html"],
    "CSS": ["css"],
    "JavaScript": ["javascript", "js"],
    "PHP": ["php"],
    "C": ["c"],
    "C++": ["c++", "cpp"],
    "C#": ["c#", "cs"],
    "SQL": ["sql"],
    "Ruby": ["ruby"],
    "Python": ["python", "py"],
    "Java": ["java"],
}
