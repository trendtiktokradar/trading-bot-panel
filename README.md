# Trading bot · panel público (paper)

Panel web **estático y de solo lectura** del bot paper de memecoins de Solana (migraciones pump.fun → PumpSwap).
No hay backend, ni claves, ni wallets: es una página que lee `data.json`.

- `main`: carpeta `web/` (el panel). En Vercel: *Root Directory* = `web`, sin build.
- `data`: una rama con **un único commit** (`data.json` + `vercel.json`) que el bot reemplaza cada ~4 min (force-push solo de esa rama; Vercel no la despliega).
- Todo es **paper trading**: no se firma ni se envía ninguna transacción. No es consejo financiero.
