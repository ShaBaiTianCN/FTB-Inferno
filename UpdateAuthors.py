import re
import json

authors_data = json.loads(input())

authors = [(i['author']['login'], i['author']['path']) for i in authors_data]
authors.sort(key=lambda i: i[0])
authors_text = ''.join([
    '## 作者\n\n',
    *[f'- [{i[0]}](https://github.com{i[1]})\n' for i in authors],
    '\n## 安装'
])

with open('README.md', 'r', encoding='utf-8') as f:
    content = f.read()

with open('README.md', 'w', encoding='utf-8') as f:
    pattern = re.compile('## 作者.*## 安装', re.DOTALL)
    f.write(pattern.sub(authors_text, content))
