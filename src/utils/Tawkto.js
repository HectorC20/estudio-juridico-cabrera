
// Declaración global para Tawk_API
declare global {
    interface Window {
        Tawk_API: any;
    }
}

export function loadTawkToScript(): void {
    const Tawk_API = window.Tawk_API || {};
    const Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/5dba6828e4c2fa4b6bd9469c/default";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript) {
        firstScript.parentNode?.insertBefore(script, firstScript);
    }
}
