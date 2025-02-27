import NaviagationBar from "./NavigationBar";

interface BasePageProps {
    children: React.ReactNode;
}


export default function BasePage(props: BasePageProps) {
    const { children } = props;

    return (
        <>
            <NaviagationBar />
            {children}
        </>
    )
}