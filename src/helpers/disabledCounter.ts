import { IChild } from "../components/child-counter/childCounter";

export function disabledCounter(
    disabledCount: number,
    peopleCount: number | string,
    childs: IChild[]
) {
    const childsCount = clearChilds(childs).length
    return +disabledCount > Number(peopleCount) + childsCount;
}

export function clearChilds(childs: IChild[]): IChild[] {
    return childs.filter((child: IChild) => child?.id !== 1 && child?.id !== 0);
}
