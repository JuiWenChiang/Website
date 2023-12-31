import { defineStore } from "pinia";

export const contactStore = defineStore("contactOutLink", () => {
    const downloadResume = () => {
        let pdfUrl = '/JuiWenChiange_Resume.pdf'
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank';
        link.download = 'Jui_Wen_Chiange_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const openLink = (mode: string) => {
        let linkURL = '';
        switch (mode) {
            case 'github':
                linkURL = 'https://github.com/JuiWenChiang';
                break;
            case 'linkedin':
                linkURL = 'https://www.linkedin.com/in/juiwen-chiang1995/';
                break;
        }

        // window.open(linkURL, '_blank');
        const link = document.createElement('a');
        link.href = linkURL;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    return { downloadResume, openLink }
});