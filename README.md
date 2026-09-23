# Open in Pure Data

This extension adds a command that opens `.pd` files from VS Code in the Pure Data app (`/Applications/Pd-0.55-2.app`).

## Usage

- Right-click a `.pd` file in the Explorer and select "Pure Dataで開く" (Open in Pure Data)
- Or search for "Pure Dataで開く" in the Command Palette and run it

## Notes

- If your Pure Data app has a different name or path, update the path in `src/extension.ts`.

## Release Notes

### 0.0.1

- Initial release
- Prevent duplicate Pure Data windows and improve stability
