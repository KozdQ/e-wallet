import {cleanup, render} from "@testing-library/react";
import React from "react";
import FeatureBottom from "../../components/FeatureBottom";

afterEach(cleanup)

test("feature bottom", () => {
	const onClick = jest.fn();

	render(<FeatureBottom extraStyle={""} onClick={onClick} iconUrl={""} name={"Hello"}/>);

});