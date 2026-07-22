import { vi } from "vitest";

import { KEYS } from "@excalidraw/common";

import { Excalidraw } from "../index";
import { fileSave } from "../data/filesystem";

import { Keyboard, UI } from "./helpers/ui";
import { getTextEditor } from "./queries/dom";
import { fireEvent, render, waitFor } from "./test-utils";

vi.mock("../data/filesystem", async (importOriginal) => {
  const module = await importOriginal<typeof import("../data/filesystem")>();

  return {
    ...module,
    fileSave: vi.fn().mockResolvedValue({ name: "test.excalidraw" }),
  };
});

const mockedFileSave = vi.mocked(fileSave);

describe("save shortcuts", () => {
  beforeEach(() => {
    mockedFileSave.mockClear();
  });

  it("handles Ctrl/Cmd+S while editing text", async () => {
    await render(<Excalidraw handleKeyboardGlobally={true} />);

    UI.createElement("text", {
      x: 10,
      y: 10,
      width: 100,
      height: 50,
    });

    const editor = await getTextEditor();
    editor.focus();
    expect(editor).toBe(document.activeElement);

    Keyboard.withModifierKeys({ ctrl: true }, () => {
      expect(fireEvent.keyDown(editor, { key: KEYS.S, ctrlKey: true })).toBe(
        false,
      );
    });

    await waitFor(() => expect(mockedFileSave).toHaveBeenCalledTimes(1));
  });
});
