import React from "react";

interface IContadorValorProps {
	contador: number;
}

export default (porps: IContadorValorProps) => <p>{porps.contador}</p>
