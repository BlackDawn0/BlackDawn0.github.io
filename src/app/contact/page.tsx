import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <main className="flex-1">
        <div className="container mx-auto max-w-3xl py-12 px-4 md:px-6 md:py-24">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <p>If you have any questions or find a bug, I am here to help.</p>
                  <p>To help me solve your problem as fast as possible, please include the following information in your message. Support requests missing this information may take longer to resolve.</p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Unity Version (e.g., 2022.3.15f1)</li>
                    <li>Asset Version (e.g., v1.0)</li>
                    <li>A clear description of the problem you are having.</li>
                    <li>Any error messages from the Unity console (please copy and paste the full error).</li>
                  </ul>
                  <p>For direct support, bug reports, or private inquiries, please email me directly at: <a href="mailto:Contact.blackDawn@proton.me" className="text-primary hover:underline">Contact.blackDawn@proton.me</a></p>
                </CardContent>
            </Card>
        </div>
    </main>
  );
}
