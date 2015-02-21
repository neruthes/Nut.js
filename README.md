# Nut.js

`Nut.js` is a lightweight (and maybe useless) library for encrypting something symmetrically to avoid keyword-based censorship. For this purpose you should decrypt the messages in frontend, so using this may be harmful for SEO.

`Nut.js` est une petite bibliothèque JavaScript pour crypter vos messages symétriquement pour éviter la censure fondée sur mots-clés. Il faut utiliser cette bibliothèque au côté clients, alors vous pouvez profiter d’excepter les moteurs de recherche.

## Usage / Utilisation

Set your own key for encryption in `nut.min.js`.

Configurez votre clé pour crypter dans `nut.min.js`.

### Encrypting / Cryptage

```javascript
Nut.encrypt('Some string you want to encrypt');
```

Or / Ou

```javascript
'Some string you want to encrypt'.encrypt();
```

### Decrypting / Décryptage

```javascript
Nut.decrypt('Á6%gÆWC≯Ç#S i;  FLj.&ZJ«');
```

Or / Ou

```javascript
'Á6%gÆWC≯Ç#S i;  FLj.&ZJ«'.decrypt();
```

## Copyright

This software is released under MIT license.

Ce logiciel est distribué sous la licence MIT.
