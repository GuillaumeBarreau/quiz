const dataObjectTemplate = ({ description, longTitle, shortTitle, url }) => {
    return {
        description: description,
        longTitle: longTitle,
        shortTitle: shortTitle,
        url: url,
        get path() {
            return `./data/${this.shortTitle}.md`
        },
    }
}

const dataConfig = [
    dataObjectTemplate({
        description: 'Practice Tests Exams Questions & Answers',
        longTitle: 'Professional Scrum Developer 1',
        shortTitle: 'PSD_01',
        url: 'professional-scrum-developer-1',
    }),
    dataObjectTemplate({
        description: 'Practice Tests Exams Questions & Answers',
        longTitle: 'Amazon Web Services Certified Cloud Practitioner',
        shortTitle: 'CLF_C01',
        url: 'amazon-web-services-certified-cloud-practitioner',
    }),
    dataObjectTemplate({
        description: 'Practice Tests Exams Questions & Answers',
        longTitle: 'Microsoft Azure 900 Fundamentals',
        shortTitle: 'AZ_900',
        url: 'microsoft-azure-900-fundamentals',
    }),
    dataObjectTemplate({
        description: 'Practice Tests Exams Questions & Answers',
        longTitle: 'Professional Scrum Product Owner 1',
        shortTitle: 'PSPO_01',
        url: 'professional-scrums-product-owner-1',
    }),
    dataObjectTemplate({
        description: 'Practice Tests Exams Questions & Answers',
        longTitle: 'Google Cloud Platform Associate Cloud Engineer',
        shortTitle: 'GCP_ACE',
        url: 'google-cloud-platform-associate-cloud-engineer',
    }),
    dataObjectTemplate({
        description: 'Practice Tests Exams Questions & Answers',
        longTitle: 'Professional Scrum Master 1',
        shortTitle: 'PSM_01',
        url: 'professional-scrum-master-1',
    }),
]
export default dataConfig
