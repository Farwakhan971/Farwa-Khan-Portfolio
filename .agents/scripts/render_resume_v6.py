import fitz
from pathlib import Path

pdf = Path('attached_assets/Farwa-khan-Resume_(6)_1789641156719.pdf')
out = Path('.agents/outputs/resume_v6')
out.mkdir(parents=True, exist_ok=True)
doc = fitz.open(pdf)
print('pages', doc.page_count)
for index, page in enumerate(doc, start=1):
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    target = out / f'page-{index}.png'
    pix.save(target)
    print(target)
