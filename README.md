# Tools zum Testen und Code-Qualität Sichern
In diesem Repository sind diverse Tools Beispielhaft enthalten um die Wartbarkeit von Code zu fördern. Dazu gehören Typescript, ESLint, IstanbulJS, TypeDoc, Mocha und Chai. Was jedes dieser Tools macht und welche Dateien dafür wichtig sind werde ich im folgenden erklären.

## Zum Anfang

Als allererstes muss `npm install` ausgeführt werden. 
Hier einmal die wichtigen Befehle im Überblick
```
Test: npm test
Coverage Report: npm run coverage
Ausführen und Kompilieren: npm start
Dokumentation generieren: npm run doc
```

Kommen wir nun zu den einzelnen Tools.

## Typescript

Da wir in unserem Projekt statische Typisierung verwenden möchten wurde Typescript installiert.
Typescript wird in der Datei `tsconfig.json` konfiguriert.
Von besonderer Bedeutung ist dabei der Eintrag mit:
```
"include": [
  "src/**/*.ts"
],
```
Hier wird festgelegt in welchem Ordner die Source Dateien sind. Die Ausgabe der kompilierten Javascript Dateien geschieht dann im Ordner `dist`.

## ESLint

ESLint überprüft den Code auf festgelegte Code-Style konventionen. Die entsprechende Konfiguration dafür findet sich in der `.eslintrc.yml`. Die Datei kann vom Wizard aber auch als .js oder .json angelegt werden entsprechend mit anderer Syntax. 
In dieser Konfigurationsdatei kann man unter dem Punkt `rules` einzelne Regeln deaktivieren oder ihren Modus ändern von `Error` zu `Warning`, falls man nicht möchte, dass einzelne Regeln die Kompilierung unterbrechen.

Für ESLint ist auch das npm package `typescript-eslint-parser` der es ermöglicht diese Checks auch auf Typescript durchzuführen.

Der Linter kann manuell ausgeführt werden, mit dem angelegten npm script:
```
npm run lint
```
Mit `npm run lint -- --fix` können manche Fehler und Warnings auch automatisch behoben werden. Um einen kurzen Einblick in die Syntax zu kriegen schaut euch die Datei `test.js` an und schaut auch in die Dokumentation von Mocha.

## Mocha

Mocha testet Javascript. Die Tests liegen im Ordner `/test`. 

Die Tests mit Mocha konnen über das npm script ausgeführt werden.
```
  npm test
```
Dieses Script Linted und Kompiliert auch nocheinmal vorne Weg, außerdem führt es auch eine Analyse der Code Coverage aus, die auf der Konsole ausgegeben wird, aber dazu gleich mehr.

## Chai

Chai liefert eine schöne alternative Syntax für Asserts.
```
foo(2).should.be.a('number');
```
Muss aber in den Tests nicht zwangsläufig verwendet werden, wenn es euch nicht gefällt. Man kann immernoch die normalen Assert-Statements benutzen.

## Istanbul (NYC)

Istanbul/NYC kümmert sich um die Code Coverage.
Mit dem Befehl:
```
npm run coverage
```
Kann der große HTML-Report erstellt werden. Dieser liegt dann unter `/coverage`. Es werden angaben gemacht zu Statement-, Branch-, Function- und Line-Coverage gemacht, außerdem kann man dort sehen welche Stellen im Quellcode abgedeckt sind oder nicht.

## Typedoc

Typedoc kümmert sich um die Dokumentation. Sie wird auch im HTML Format erstellt. Man findet die Dokumentation nach ausführen des Befehls unter `/docs`.
Der Befehl lautet:
```
npm run doc
```
