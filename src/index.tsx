import React from "react";
import {Text} from "react-native";
import {Login} from "./login/login";


export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function sum(a: number, b: number): Promise<number> {
  return Promise.resolve(a + b);
}

export function labeledText(title: string, value: string): Element {
  return <Text>{title} : {value}</Text>
}

export function loginCmp(placeholder: string, onSubmit: void): Element {
  return <Login placeholder={placeholder} onSubmit={onSubmit}/>
}
