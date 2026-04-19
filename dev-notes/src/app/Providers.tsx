import RecoilProvider from "../Shared/providers/RecoilProvier";
import ThemeProvider from "../Shared/providers/ThemeProvider";

export default function Providers({ children } : { children: React.ReactNode }){
    return(
        <RecoilProvider>
            <ThemeProvider>{children}</ThemeProvider>
        </RecoilProvider>
    );
}