
import { Provider } from "@/providers/provider";
import './global.css'

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
