import re


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
    ORANGE = "#ff9900"
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
        return self.PRIMARY

    @classproperty
    def secondary(self) -> str:
        """Green"""
        return self.SECONDARY

    @classproperty
    def accent(self) -> str:
        """Blue"""
        return self.ACCENT

    @classproperty
    def class_color(self) -> str:
        """Blue"""
        return self.BLUE

    @classproperty
    def function_color(self) -> str:
        """Green"""
        return self.GREEN


class File:

    def __init__(self, file_name: str, language: str, directory: str = "unhighlighted_html") -> None:
        self._fn = file_name
        self._language = language
        self._dir = directory

        with open(
            f"storage/app/markdown/course/{language}/{directory}/{file_name}",
            "r"
        ) as f:
            data = f.read()

        self._content = data

    @property
    def content(self) -> str:
        return self._content

    @property
    def file_name(self) -> str:
        return self._fn

    @property
    def language(self) -> str:
        return self._language

    @property
    def short(self) -> str:
        return self.SHORT

    @property
    def directory(self) -> str:
        return self._dir

    @content.setter
    def content(self, data: str) -> None:
        self._content = data

    def path(self, directory: str | None = None) -> str:
        if directory == None:
            directory = self._dir
        return f"storage/app/markdown/course/{self.language}/{directory}/{self._fn}"

    def save(self) -> None:
        with open(self.path, "w") as f:
            f.write(self._content)

    def save_as_highlighted(self) -> None:
        path = self.path("finished_html")
        with open(path, "w") as f:
            f.write(self._content)

    def highlight_code_block(self) -> None:
        self._content = re.sub(
            r'<code class="language-html">(.*?)</code>',
            HTML.highlight_code,
            self._content,
            flags=re.DOTALL
        )
        self._content = re.sub(
            r'<code class="language-css">(.*?)</code>',
            CSS.highlight_code,
            self._content,
            flags=re.DOTALL
        )


class HTML:
    LANGUAGE: str = "HTML"
    EXTENTION: str = ".html"

    tag_color = Color.primary
    value_color = Color.secondary
    attribute_color = Color.accent
    comment_color = Color.gray

    tag_pattern = re.compile(r'&lt;(/?)(\w+)')
    """
    `<div class="abc">abc</div>`\n
    `-^^^------------------^^^-`
    """
    attribute_pattern = re.compile(r'(\s+\w+)=&quot;')
    """
    `<div class="abc">abc</div>`\n
    `-----^^^^^----------------`
    """
    value_pattern = re.compile(r'&quot;(.*?)&quot;')
    """
    `<div class="abc">abc</div>`\n
    `------------^^^-----------`
    """
    comment_pattern = re.compile(r'&lt;!--(.*?)(--&gt;)', flags=re.DOTALL)

    # fmt: off
    tag_outcome = fr'&lt;\1<p style="color: {tag_color};">\2</p>'
    attribute_outcome = fr'<p style="color: {attribute_color};">\1</p>=&quot;'
    value_outcome = fr'&quot;<p style="color: {value_color};">\1</p>&quot;'
    # fmt: on

    @classmethod
    def highlight_code(cls, code_block_match: re.Match) -> str:
        code_block = code_block_match.group(1)

        code_block = re.sub(cls.tag_pattern,
                            cls.tag_outcome,
                            code_block
                            )
        code_block = re.sub(cls.attribute_pattern,
                            cls.attribute_outcome,
                            code_block
                            )
        code_block = re.sub(cls.value_pattern,
                            cls.value_outcome,
                            code_block
                            )
        code_block = re.sub(cls.comment_pattern,
                            cls.comment_callback,
                            code_block
                            )

        return f'<code class="language-html">{code_block}</code>'

    @classmethod
    def comment_callback(cls, code_block_match: re.Match) -> str:
        code_block = code_block_match.group(1)

        code_block = re.sub(
            r'<p style="color: #[0-9a-f]{6};">(.*?)</p>',
            r'\1',
            code_block
        )
        return f'<p style="color: {cls.comment_color};">&lt;!--{code_block}--&gt;</p>'

class CSS:
    LANGUAGE: str = "CSS"
    EXTENTION: str = ".css"

    class_color: str = Color.primary
    type_color: str = Color.accent
    at_color: str = Color.purple
    comment_color: str = Color.gray

    # fmt: off
    class_pattern = re.compile(r'(?<!\d)([\.\#][a-zA-Z0-9-]+)([\s\{\:])')
    """
    `.welcome #inner a {`\n
    `^^^^^^^^-^^^^^^---`
    """
    type_pattern = re.compile(r'(?<![\#\.\<\>\"\@])(\b[a-zA-Z-]+)([\s\{\:])')
    """
    `.welcome #inner a {`\n
    `----------------^-`
    """
    psudo_pattern = re.compile(r':(\b[a-zA-Z0-9-]+)([\s\{])')
    """
    `a::after {`\n
    `---^^^^^--`
    """
    at_pattern = re.compile(r'(@\b[a-zA-Z0-9-]+)([\s\{\:])')
    """
    `@media screen and (max-width: 1200px) {`\n
    `^^^^^^---------------------------------`
    """
    and_pattern = re.compile(r'(?<![\#\.\<\>\"\@])(\s*)(and)([\s\{\:])')
    """
    `@media screen and (max-width: 1200px) {`\n
    `--------------^^^----------------------`
    """
    comment_pattern = re.compile(r'\/\*(.*?)(\*\/)', flags=re.DOTALL)
    """Everything inside comments"""

    class_outcome = fr'<p style="color: {class_color};">\1</p>\2'
    type_outcome = fr'<p style="color: {type_color};">\1</p>\2'
    psudo_outcome = fr'<p style="color: {type_color};">\1</p>\2'
    at_outcome = fr'<p style="color: {at_color};">\1</p>\2'
    and_outcome = fr'\1<p style="color: {at_color};">\2</p>\3'
    # fmt: on

    @classmethod
    def highlight_code(cls, code_block_match: re.Match) -> str:
        code_block: str = code_block_match.group(1)

        code_block = re.sub(cls.at_pattern,
                            cls.at_outcome,
                            code_block
                            )
        code_block = re.sub(cls.and_pattern,
                            cls.and_outcome,
                            code_block
                            )
        code_block = re.sub(cls.class_pattern,
                            cls.class_outcome,
                            code_block
                            )
        code_block = re.sub(cls.type_pattern,
                            cls.type_outcome,
                            code_block
                            )
        code_block = re.sub(cls.psudo_pattern,
                            cls.psudo_outcome,
                            code_block
                            )
        code_block = re.sub(cls.comment_pattern,
                            cls.comment_callback,
                            code_block
                            )

        return f'<code class="language-css">{code_block}</code>'

    @classmethod
    def comment_callback(cls, code_block_match: re.Match) -> str:
        code_block = code_block_match.group(1)
        code_block = re.sub(
            r'<p style="color: #[0-9a-f]{6};">(.*?)</p>',
            r'\1',
            code_block,
            flags=re.DOTALL
        )
        return f'<p style="color: {cls.comment_color};">/*{code_block}*/</p>'
