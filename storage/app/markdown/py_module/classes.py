class LanguageNotFoundError(Exception):
    pass


class classproperty:
    """Property classmethod"""

    def __init__(self, f):
        self.getter = f

    def __get__(self, obj, cls=None):
        return self.getter(cls)


class Color:
    """Class for default colors"""

    RED = "#ff0000"
    GREEN = "#60a642"
    BLUE = "#44b3f1"
    PURPLE = "#baa0f8"
    GRAY = "#8b9798"

    PRIMARY = RED
    SECONDARY = GREEN
    ACCENT = BLUE

    @classproperty
    def red(self) -> str:
        """Red ...duh"""
        return self.RED

    @classproperty
    def green(self) -> str:
        """Green ...duh"""
        return self.GREEN

    @classproperty
    def blue(self) -> str:
        """Blue ...duh"""
        return self.BLUE

    @classproperty
    def purple(self) -> str:
        """Purple ...duh"""
        return self.PURPLE

    @classproperty
    def gray(self) -> str:
        """Gray ...duh"""
        return self.GRAY

    @classproperty
    def grey(self) -> str:
        """Gray"""
        return self.GRAY

    @classproperty
    def primary(self) -> str:
        """Red"""
        return self.RED

    @classproperty
    def secondary(self) -> str:
        """Green"""
        return self.GREEN

    @classproperty
    def accent(self) -> str:
        """Blue"""
        return self.BLUE

    @classproperty
    def class_color(self) -> str:
        """Blue"""
        return self.BLUE

    @classproperty
    def function_color(self) -> str:
        """Green"""
        return self.GREEN


class File:

    @property
    def language(self) -> str:
        return self._language

    @property
    def content(self) -> str:
        return self._content

    @property
    def file_name(self) -> str:
        return self.file_name

    @content.setter
    def content(self, data: str) -> None:
        self._content = data

    def __init__(self, fn: str, data: str, language: str) -> None:
        self._fn = fn
        self._content = data
        self._language = language

    def path(self, directory="unknown") -> str:
        return f"storage/app/markdown/course/{self.language}/{directory}/{self._fn}"

    def save(self) -> None:
        with open(self.path, "w") as f:
            f.write(self._content)

    def save_as_highlighted(self) -> None:
        path = self.path("finished_html")
        with open(path, "w") as f:
            f.write(self._content)

    def save_as_md(self) -> None:
        if ".md" in self._fn:
            self.save()
        else:
            # fmt: off
            fn = f"storage/app/markdown/course/{self._fn.replace('.html', '.md')}"
            with open(fn, "w") as f:
                f.write(self._content)

    def save_as_html(self) -> None:
        if ".html" in self._fn:
            self.save()
        else:
            fn = f"storage/app/markdown/course/{self._fn.replace('.md', '.html')}"
            with open(fn, "w") as f:
                f.write(self._content)
            # fmt: on
