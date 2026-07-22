import { queryByLabelText, queryByText } from "@testing-library/react";

import { Excalidraw } from "../index";
import { API } from "../tests/helpers/api";
import { render } from "../tests/test-utils";

describe("Actions", () => {
  beforeEach(async () => {
    await render(<Excalidraw />);
  });

  it("labels the selected elements alignment tools as align and distribute", () => {
    const rect1 = API.createElement({ x: 0 });
    const rect2 = API.createElement({ x: 200 });
    const rect3 = API.createElement({ x: 400 });

    API.setElements([rect1, rect2, rect3]);
    API.setSelectedElements([rect1, rect2, rect3]);

    expect(queryByText(document.body, "Align & Distribute")).not.toBe(null);
    expect(queryByText(document.body, "Align")).toBe(null);
    expect(queryByLabelText(document.body, "Distribute horizontally")).not.toBe(
      null,
    );
    expect(queryByLabelText(document.body, "Distribute vertically")).not.toBe(
      null,
    );
  });
});
