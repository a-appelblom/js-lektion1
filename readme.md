# Lektion 1 i Javascript kursen för Java-21 klassen

Lösningsförslag och genomgångar finns i de 3 utkomenterade js-filerna. Kommentera in den ni vill använda i HTML-filen.

## Dagens övning och utmaning

### Lektion 1 - uppvärmning och övning

Välkomna till Javascript. Ett konstigt men roligt språk i grunden. Här är några övningar för att ni ska kunna sätta igång lite med hur språket ser ut. Inget Jättekomplicerat ännu men nästa lektion börjar vi med DOM-manipulation och då finns det mycket vi kan göra.

#### Grunden

Skapa en mapp för övningen.
Skapa en HTML och CSS-fil. Kom ihåg emmet!
Länka css filen.
Skapa en JS-fil
Länka in denna i din HTML. Var ska den ligga?
Kolla att den funkar med en console.log().

Grattis! Detta är allt vi behöver skapa just nu.

Skapa några olika variabler med olika typer.
Prova att addera dem och se vad som händer
Kolla vad ni får för resultat med console.log()

Prova att skapa en till js fil och länka in den med.
Anropa en funktion i den första js filen i denna och vise versa.

#### Utmaningen

Nu när ni testat lite tänkte jag att vi ska göra något med lite substans.

Det ska användas, loopar, if- eller switch-satser, alerts och en del envishet.

Ett högre eller lägre spel.

Då jag inte gått igenom dom än så har vi inte åtkomst till dessa knappar eller element utan istället kommer vi till vårt förfogande ha de olika alert metoderna.

`alert()` visa ett meddelande till användaren
`confirm()` be om ett svar true/false från användaren
`prompt()` be om input från användaren, returnerar en sträng

dessa kan samtliga skrivas som window.alert() etc då de är en del av window objektet.

Med dessa kan vi bygga en app som fungerar lite som en konsolapplikation fast i webbläsaren.

Målet är att bygga en applikation där användaren ska gissa om nästa nummer kommer att vara högre eller lägre än det tidigare numret.

En första utgångspunkt kan vara att se till att det går att få input från användaren.

Spara ett `confirm()` input i en variabel och logga det i konsolen.

Alternativt så kan ni börja med att skapa random funktionen till numret.

se metoderna `Math.floor()` samt `Math.random()` för att lösa denna uppgift.

Har ni löst båda dessa kan ett andra steg vara att försöka bygga ett gissa numret spel till att börja med.

Kom ihåg att input ni får i `confirm()` alltid är en sträng.

`parseInt()` konverterar sträng till int.

`JSON.stringify()` kan konvertera nästan vad som helst till en sträng.

Har ni kommit så här långt är det nu bara en fråga om att finslipa logiken.

Poäng är alltid kul. Testa att implementera ett poängsystem som ökas vid rätt svar.

Jag finns tillgänglig som hjälp. Hoppas övningen inte är för lätt eller svår. Vill ni ha något mer att göra så är det bara att säga till.

Jag kommer att lägga upp ett lösningsförslag på github innan jag lämnar för dagen.
