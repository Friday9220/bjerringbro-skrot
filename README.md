# Bjerringbro Skrot & Afhentning

Hjemmeside for Bjerringbro Skrot & Afhentning: gratis afhentning af jern og metal, gamle møbler, hvidevarer, rydning af huse og garager og hjælp til flytning i Bjerringbro og omegn.

Siden er ren HTML, CSS og JavaScript uden byggetrin. Åbn `index.html` i en browser, eller læg mappen på et hvilket som helst webhotel (fx GitHub Pages).

- `index.html` – forsiden
- `styles.css` – design (farver øverst under `:root`)
- `script.js` – kontaktlinks, tekstbånd og scroll-animationer
- `site-config.js` – **kontaktoplysninger (Messenger, telefon, e-mail)**
- `404.html` – side der vises, hvis en adresse ikke findes
- `assets/` – favicon

## Kontaktoplysninger

Skriv Messenger-link, telefonnummer og e-mail ind i `site-config.js`. Hele siden henter dem derfra. Står et felt tomt, bliver det skjult på siden, og Messenger-knapperne sender videre til Facebook i stedet.

Når telefonnummeret er udfyldt, får siden også en "Ring"-knap i toppen og i bunden på mobil.

## Udgivelse

GitHub Pages fra grenen, med domænet bjerringbroskrot.dk (se `CNAME`). DNS ligger hos Simply.com: fire A-poster for @ (185.199.108.153, .109.153, .110.153, .111.153) og en CNAME for www til friday9220.github.io.

## Billeder

Fotos er fra [Unsplash](https://unsplash.com) og må bruges gratis, også kommercielt, under [Unsplash-licensen](https://unsplash.com/license). De hentes direkte fra images.unsplash.com.

- Forside: [fyldt opbevaringsrum](https://unsplash.com/photos/vyOERax9oI4) af Adam Winger
- Rydning: [garage fyldt med ting](https://unsplash.com/photos/SP4oH94qOCU) af Point3D Commercial Imaging Ltd.
- Flytning: [flyttebil og møbler](https://unsplash.com/photos/k0HLWPwfJLU) af Joseph Prospere
