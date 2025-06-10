const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const LINKEDIN_URL = "https://www.linkedin.com/in/ramazan-said-galip-330956243/";

export async function getGitHubProjects() {
  try {
    let allRepos = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `https://api.github.com/users/ramazangalip/repos?per_page=100&page=${page}`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );
      
      const repos = await response.json();
      
      if (repos.length === 0) {
        hasMore = false;
      } else {
        allRepos = [...allRepos, ...repos];
        page++;
      }
    }

    return allRepos.map(repo => ({
      id: repo.id,
      title: repo.name,
      description: repo.description,
      gitUrl: repo.html_url,
    }));
  } catch (error) {
    console.error("GitHub projeleri alınırken hata oluştu:", error);
    return [];
  }
}

export async function getLinkedInCertifications() {
  try {
    // LinkedIn API'si için gerekli kimlik doğrulama ve izinler gerekiyor
    // Şimdilik statik veri döndürüyoruz
    return [
      "Udemy Sıfırdan İleri Seviye Python Programlama",
      "Udemy Sıfırdan Web Geliştirme",
      "Turkcell Geleceği Yazanlar 101:HTML",
      "Turkcell Geleceği Yazanlar 201:HTML5 & CSS3",
      "BTK AKADEMİ React İle Web Programlama",
      "BTK AKADEMİ Django İle Web Geliştirme",
      "Patika .Dev Frontend Web Development",
      "BTK AKADEMİ Uygulamalarla SQL Eğitimi",
      "Udemy Flutter&Firebase E-Ticaret Admin Uygulaması",
      "Metamy Yazılım Akademisi Frontend Bootcamp",
      "Metamy Yazılım Akademisi Backend Bootcamp"
    ];
  } catch (error) {
    console.error("LinkedIn sertifikaları alınırken hata oluştu:", error);
    return [];
  }
} 