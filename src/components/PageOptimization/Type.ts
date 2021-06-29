import { Dispatch, SetStateAction } from 'react';

//Common Type
export type ValueIsNumber = {
    [index: string]: number;
};

//AllList.tsx
type TaskInner = {
    $t: string;
};

export type Task = {
    gsx$pagename: TaskInner;
    gsx$efficiency: TaskInner;
    gsx$createtime: TaskInner;
};

export type AllListType = {
    allTasks: Task[];
    setTargetTask?: Dispatch<SetStateAction<Array<any>>>;
};

//DetailModal.tsx
export type IDetailModal = {
    pageName: string;
    pageData: ValueIsNumber[];
    averageData: ValueIsNumber;
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
};

//ComparePage.tsx
export type IComparePage = {
    mostEfficientPage: string;
};

//AverageOfOptimization.tsx
export type IAverageOfOptimization = {
    indicatorData: number;
};

//TrackingPage.tsx
type Page = {
    pageName: string;
    name: string;
}[];

export type ITrackingPage = {
    page: Page;
    tagClick(page: string): void;
};

//AccumulationOfOptimizationPage

export type IAccumulationOfOptimizationPage = {
    projectCount: number;
};
