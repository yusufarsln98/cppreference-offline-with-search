window.searchContent = function(query) {
    if (!query.trim()) return [];

    query = query.toLowerCase();
    const results = [];

    for (const item of searchIndex) {
        const title = (item.title || '').toLowerCase();
        const headings = (item.headings || '').toLowerCase();
        const metaTags = (item.meta_tags || '').toLowerCase();
        const body = (item.body || '').toLowerCase();

        // Calculate relevance score
        let score = 0;
        if (title.includes(query)) score += 10;
        if (headings.includes(query)) score += 5;
        if (metaTags.includes(query)) score += 3;
        if (body.includes(query)) score += 1;

        if (score > 0) {
            results.push({
                title: item.title || 'Untitled',
                path: item.path,
                score: score,
                snippet: extractSnippet(body, query) || extractSnippet(headings, query) || ''
            });
        }
    }

    // Sort by relevance score
    return results.sort((a, b) => b.score - a.score);
}

window.extractSnippet = function(text, query) {
    if (!text) return '';

    const index = text.indexOf(query);
    if (index === -1) return '';

    const start = Math.max(0, index - 50);
    const end = Math.min(text.length, index + query.length + 50);
    let snippet = text.substring(start, end);

    if (start > 0) snippet = '...' + snippet;
    if (end < text.length) snippet = snippet + '...';

    return snippet;
}
