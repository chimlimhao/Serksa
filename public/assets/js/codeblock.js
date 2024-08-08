class HTML {
    static quotePattern = new RegExp(/"/, "g");
    static tagPattern = new RegExp(/&lt;(\/)?(\w+)/, "gi");
    static attributePattern = new RegExp(/(\s+\w+)=&quot;/, "gi");
    static valuePattern = new RegExp(/&quot;(.*?)&quot;/, "gi");
    static commentPattern = new RegExp(/&lt;!--(.*?)(--&gt;)/, "gis");

    static highlight(block) {
        block = block.replace(this.quotePattern, '&quot;');

        block = block.replace(this.tagPattern, (match, slash, value) => {
            slash = slash ? slash : "";
            return `&lt;${slash}<span class="tag">${value}</span>`;
        });

        block = block.replace(this.attributePattern, (match, value) => {
            return `<span class="attribute">${value}</span>=&quot;`;
        });

        block = block.replace(this.valuePattern, (match, value) => {
            return `&quot;<span class="value">${value}</span>&quot;`;
        })
        return block;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const codeBlocks = document.querySelectorAll("pre code");

    codeBlocks.forEach(block => {
        if (block.classList.contains("language-html")) {
            block.innerHTML = HTML.highlight(block.innerHTML);
        }
    });
});
