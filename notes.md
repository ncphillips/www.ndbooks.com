# DATA format
yaml, toml, or json


# books ordering:

Have book + each edition

- BOOK Data: base data with "book"
  - author
  - language,
  - translator
  - genre
  - featured image (this is for page)

- EDITION Data:
    - contributors (only) with edition, because new editions have different intros, etc., plus
    - "show in forthcoming"
    - cover image
    - publication date
    - description
    - book  - related data both ways, book slug from edition, ISBN from book.


## should editions be separate?
Implications:

pro:
- proper data model
- relate by ISBN (which can be typed in)
- cleaner for things like forthcoming. Just pull in the edition and link to the "book"


Con:
- not clear from looking at the book page what the edition is
- Hugo makes them all a page





# Taxonomy
genre
language
contributor type
