import BasePage from "@/base/components/BasePage";
import useWindowDimensions from "@/helper/hooks/useWindowDimensions";

export default function LandingPageContent() {
    const { size } = useWindowDimensions();

    return (
        <BasePage>
            <div className="w-[100vw] h-[500px] mr-[300px] bg-blue-500">
                <div >
                    <h1>Expansive Soul</h1>
                    <h1>Current window size {`width: ${size.width} height: ${size.height}`}</h1>
                </div>
            </div>
        </BasePage>
    );
}