#images
Need to normalize names. Covers should maybe have ISBN names. Optimize all.


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
- for genre pages (poetry, series), pull in the book + edition. On book pages, pull in the edition(s)

Con:
- not clear from looking at the book page what the edition is
- Hugo makes them all a page





# Taxonomy
think about how Hugo handles taxonomy and pages

language - these have pages of their own, but only because we have to control what they are
contributor type

genre +

TYPE - a subgenre

this is taxonomical, but need pages on their own?
series/phamplets/pearls - these are each a "series" taxonomy, but needs a different name
