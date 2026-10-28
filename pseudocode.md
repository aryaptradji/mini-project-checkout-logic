# Pseudocode — Sistem Checkout Produk

```
START
  INPUT price, quantity, member

  IF price is integer
    OR price <= 0
    OR quantity is integer
    OR quantity <= 0 THEN
    
    OUTPUT "Input tidak valid"
  ENDIF

  SET subtotal = price * quantity
  
  IF member = true THEN
    SET discount = 10% * subtotal
  ELSE
    SET discount = 0
  ENDIF

  SET total = subtotal - discount

  IF total >= 250000 THEN
    SET shipping = 0
  ELSE 
    SET shipping = 15000
  ENDIF

  SET totalPayment = total + shipping

  OUTPUT subtotal
  OUTPUT discount
  OUTPUT shipping
  OUTPUT totalPayment
END
```