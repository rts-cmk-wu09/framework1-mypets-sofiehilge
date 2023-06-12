[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/q4dgb3_H)
**FRAMEWORKS 1**

# My Pet 
### **Opgaven indeholder følgende filer:**
- Figma fil med design.

### **Opgavebeskrivelse**
- Brug Vite til at installere en react applikation
- Du skal bruge https://www.petfinder.com/developers/ api'et til at hente data fra
- Du skal bygge hele løsningen i react
- Husk at lave en branch til dit arbejde

### **Mål**
- Formålet med opgaven er at demonstrere: 
  At du kan arbejde med at implementerer de koncepter vi arbejde med i my-movie-appen i en ny ligende opgave.
  
### **Ekstraopgaver hvis du er hurtigt færdig**
- Se om du kan finde en løsning til favoritter. (like kæledyr)

### **Aflevering**
- Commit og push ofte
- Tænk over dine commit-beskeder. Din commit historik må gerne afspejle udviklingen i dit projekt med små beskrivelser. 
- Aflevér når dagen er gået ved at lave en pull-request.

### **Feedback**: 
- I vil få feedback på jeres projekt ved en kort én til én session.

### **Deadlink**:
- I har 8 arbejdsdage til at løse opgaven. 
- Opgaven skal afleveres senenst d. 8/6 kl. 14:24. Classroom'et lukker 14:25!


### petfinder apiet kræver et token
-- apiet kræver et man medsender nogle ting som skal matche api'et, og så får man sendt et token tilbage.

-- et token vare kun en time, så fejlsøg inden man rykker videre.

til listen med byer hvor dyr er sat op til adoption skal man bruge:
-- brug setlocation og dropdown location, når det er en ny by der skal vælges så vælg den. 

---- /animals?location=nyc man deklarere en ny variable med ?location og finder et navn. 
--- tag værdien derfra og sæt den ind i urlen. find værdien i boksen, gem værdien fra variablen efter =-tegnet.

eg.
- [location, setLocation] on change kig på hvilken en værdi der er  valgt og ændre listen. 

CONTEXT: er en state, men modsat en useState som kan hookes på et komponenet bruger vi en context variable der er predefineret som globalt. context= er en prop der gør state globalt, således at den fungere på hele hjemmesiden.

metoden useOutletContext: gør det muligt for os at bruge alt det der er i vores context.