# Solutie old hits

-   Am analizat folosind ghidra si gdb ./old-hits, am vazut ca se afla in variabila secret un numar generat random dupa introducerea unui int de catre utilizator. Am pus breakpoint la main apoi am dat ni in gdb pana a trecut de linia in care se initializa valoarea din secret pe care apoi am aflat-o cu p/d &secret. De asemenea, acest numar simplu nu era cel corect ci trebuia sa aduni 1337 asa cum se regasea in functia validate.

    -   Rezultatul final este videoclipul de pe youtube al piesei *What is Love*