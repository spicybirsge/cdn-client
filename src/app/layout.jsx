
import { Provider } from "@/providers/provider";


export const metadata = {
  title: "CDN uploader",
  description: "Upload files to your cdn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Provider>
        {children}
        </Provider>
       </body>
    </html>
  );
}
