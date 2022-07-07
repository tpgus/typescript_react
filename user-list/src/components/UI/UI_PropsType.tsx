interface DefaultPropsType {
  children: React.ReactNode;
  className?: string;
}

interface ButtonPropsType extends DefaultPropsType {
  type?: "submit";
  //원래는 type : "button" | "submit" 이었는데, Button 컴포넌트에서 타입이 없다면, 기본 타입을 button으로 지정했기 때문에
  //여기에서 type? : "submit"으로 해준 것. (타입 속성이 만약 필요하다면, 그 타입은 무조건 submit일 것)
  onClick?: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
}

export type { DefaultPropsType, ButtonPropsType };
