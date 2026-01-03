export { };

declare global {
    interface Window {
        emailjs: {
            init: (options: { publicKey: string }) => void;
            send: (
                serviceId: string,
                templateId: string,
                templateParams: Record<string, unknown>,
                publicKey?: string
            ) => Promise<{ status: number; text: string }>;
        };
    }

    interface BeforeInstallPromptEvent extends Event {
        readonly platforms: string[];
        readonly userChoice: Promise<{
            outcome: 'accepted' | 'dismissed';
            platform: string;
        }>;
        prompt(): Promise<void>;
    }

    interface WindowEventMap {
        beforeinstallprompt: BeforeInstallPromptEvent;
    }
}
