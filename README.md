# Nut.js

`Nut.js` is a lightweight (and maybe useless) library for encrypting something symmetrically to avoid keyword-based censorship. For this purpose you should decrypt the messages in frontend, so using this may be harmful for SEO.

## Use

You should use a different key in line 2.

### Encrypting

```javascript
Nut.encrypt('Some string you want to encrypt');
```

Or

```javascript
'Some string you want to encrypt'.encrypt();
```

### Decrypting

```javascript
Nut.decrypt('Á6%gÆWC≯Ç#S i;  FLj.&ZJ«');
```

Or

```javascript
'Á6%gÆWC≯Ç#S i;  FLj.&ZJ«'.decrypt();
```

### Notice

`Nut.js` modifies `String.prototype.encrypt` and `String.prototype.decrypt`. For safety and compatibility purpose, you can remove the last 3 lines if you are not going to use it in the second way.

## Copyright

This software is released under MIT license.

## Credit(s)

- @beretzls for ~~(sexual)~~ mental support