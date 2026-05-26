const repo = {
  owner: "fjgj5dwz7n-arch",
  name: "kimwonho",
  branch: "main",
};

const files = {
  content: "src/data/content.json",
  cv: "src/data/cv.json",
  research: "src/data/research.json",
  records: "src/data/records.json",
};

const state = {
  token: sessionStorage.getItem("githubToken") || "",
  files: {},
  recordIndex: 0,
};

window.__portfolioEditorTransport = {
  fetch: typeof fetch,
  xhr: typeof XMLHttpRequest,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function setStatus(message) {
  $("#status").textContent = message;
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunk = 0x8000;
  for (let index = 0; index < bytes.length; index += chunk) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunk));
  }
  return btoa(binary);
}

function textToBase64(text) {
  return bytesToBase64(new TextEncoder().encode(text));
}

function base64ToText(value) {
  const binary = atob(value.replace(/\n/g, ""));
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function github(path, options = {}) {
  const url = `https://api.github.com/repos/${repo.owner}/${repo.name}/${path}`;
  const request = {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${state.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {}),
    },
  };

  if (typeof fetch !== "function") {
    return githubWithXhr(url, request);
  }

  const response = await fetch(url, request);

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`${response.status} ${response.statusText}: ${detail}`);
  }

  return response.json();
}

function githubWithXhr(url, options) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(options.method || "GET", url);
    Object.entries(options.headers || {}).forEach(([key, value]) => xhr.setRequestHeader(key, value));
    xhr.onload = () => {
      if (xhr.status < 200 || xhr.status >= 300) {
        reject(new Error(`${xhr.status} ${xhr.statusText}: ${xhr.responseText}`));
        return;
      }
      resolve(JSON.parse(xhr.responseText));
    };
    xhr.onerror = () => reject(new Error("GitHub 요청에 실패했습니다."));
    xhr.send(options.body || null);
  });
}

async function loadJson(key) {
  const file = await github(`contents/${files[key]}?ref=${repo.branch}`);
  state.files[key] = {
    sha: file.sha,
    data: JSON.parse(base64ToText(file.content)),
  };
}

async function saveJson(key, message) {
  const text = `${JSON.stringify(state.files[key].data, null, 2)}\n`;
  const result = await github(`contents/${files[key]}`, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content: textToBase64(text),
      sha: state.files[key].sha,
      branch: repo.branch,
    }),
  });
  state.files[key].sha = result.content.sha;
}

function bindTabs() {
  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      try {
        saveCurrentRecord();
      } catch (error) {
        setStatus(error.message);
        return;
      }
      $$(".tab").forEach((item) => item.classList.remove("active"));
      $$(".tab-panel").forEach((panel) => panel.classList.add("hidden"));
      tab.classList.add("active");
      $(`[data-panel="${tab.dataset.tab}"]`).classList.remove("hidden");
    });
  });
}

function renderContent() {
  const content = state.files.content.data;
  $("#site-title").value = content.site.title;
  $("#site-author").value = content.site.author;
  $("#site-role").value = content.site.role;
  $("#site-email").value = content.site.email;
  $("#site-description").value = content.site.description;
  $("#home-eyebrow").value = content.home.eyebrow;
  $("#home-headline").value = content.home.headline;
  $("#home-lede").value = content.home.lede;
  $("#home-cover-alt").value = content.home.coverAlt;
  $("#about-title").value = content.about.title;
  $("#about-description").value = content.about.description;
  $("#about-paragraphs").value = content.about.paragraphs.join("\n\n");
  $("#asset-profile").value = content.assets.profileImage;
  $("#asset-cover").value = content.assets.coverImage;
}

function collectContent() {
  const content = state.files.content.data;
  content.site.title = $("#site-title").value.trim();
  content.site.author = $("#site-author").value.trim();
  content.site.role = $("#site-role").value.trim();
  content.site.email = $("#site-email").value.trim();
  content.site.description = $("#site-description").value.trim();
  content.home.eyebrow = $("#home-eyebrow").value.trim();
  content.home.headline = $("#home-headline").value.trim();
  content.home.lede = $("#home-lede").value.trim();
  content.home.coverAlt = $("#home-cover-alt").value.trim();
  content.about.title = $("#about-title").value.trim();
  content.about.description = $("#about-description").value.trim();
  content.about.paragraphs = $("#about-paragraphs").value
    .split(/\n\s*\n/g)
    .map((item) => item.trim())
    .filter(Boolean);
  content.assets.profileImage = $("#asset-profile").value.trim();
  content.assets.coverImage = $("#asset-cover").value.trim();
}

function renderCv() {
  const container = $("#cv-list");
  container.innerHTML = "";
  const items = state.files.cv.data[0]?.items || [];
  items.forEach((item, index) => {
    container.append(repeatItem("cv", index, [
      ["year", "연도", item.year],
      ["title", "제목", item.title],
      ["organization", "기관/매체", item.organization || ""],
      ["detail", "설명", item.detail || "", "textarea"],
    ]));
  });
}

function collectCv() {
  state.files.cv.data[0].items = collectRepeatItems("cv");
}

function renderResearch() {
  const container = $("#research-list");
  container.innerHTML = "";
  state.files.research.data.forEach((item, index) => {
    container.append(repeatItem("research", index, [
      ["title", "제목", item.title],
      ["period", "기간", item.period],
      ["status", "상태", item.status],
      ["summary", "요약", item.summary, "textarea"],
      ["questions", "질문", (item.questions || []).join("\n"), "textarea"],
    ]));
  });
}

function collectResearch() {
  state.files.research.data = collectRepeatItems("research").map((item) => ({
    ...item,
    questions: String(item.questions || "")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean),
  }));
}

function repeatItem(kind, index, fields) {
  const wrapper = document.createElement("article");
  wrapper.className = "repeat-item";
  wrapper.dataset.kind = kind;
  wrapper.dataset.index = index;

  fields.forEach(([name, label, value, type]) => {
    const field = document.createElement("label");
    field.innerHTML = `<span>${label}</span>`;
    const input = document.createElement(type === "textarea" ? "textarea" : "input");
    input.dataset.field = name;
    input.value = value || "";
    if (type === "textarea") input.rows = 3;
    field.append(input);
    wrapper.append(field);
  });

  const actions = document.createElement("div");
  actions.className = "repeat-actions";
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "danger";
  remove.textContent = "삭제";
  remove.addEventListener("click", () => wrapper.remove());
  actions.append(remove);
  wrapper.append(actions);

  return wrapper;
}

function collectRepeatItems(kind) {
  return $$(`[data-kind="${kind}"]`).map((wrapper) => {
    const item = {};
    wrapper.querySelectorAll("[data-field]").forEach((input) => {
      item[input.dataset.field] = input.value.trim();
    });
    return item;
  });
}

function renderRecordSelect() {
  const select = $("#record-select");
  select.innerHTML = "";
  state.files.records.data.forEach((record, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${record.date.slice(0, 10)} · ${record.title}`;
    select.append(option);
  });
  select.value = String(state.recordIndex);
  renderRecord();
}

function renderRecord() {
  const record = state.files.records.data[state.recordIndex];
  if (!record) return;
  $("#record-title").value = record.title || "";
  $("#record-date").value = record.date || "";
  $("#record-type").value = record.type || "게재";
  $("#record-source").value = record.sourceUrl || "";
  $("#record-summary").value = record.summary || "";
  $("#record-body").value = (record.body || []).join("\n");
  $("#record-images").value = JSON.stringify(record.images || [], null, 2);
  $("#record-links").value = JSON.stringify(record.links || [], null, 2);
}

function slugify(value) {
  return value
    .replace(/[《》]/g, "")
    .replace(/[^0-9A-Za-z가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function saveCurrentRecord() {
  const records = state.files.records?.data;
  if (!records || records.length === 0) return;
  const record = records[state.recordIndex];
  if (!record) return;
  record.title = $("#record-title").value.trim();
  record.originalTitle = record.originalTitle || record.title;
  record.slug = record.slug || `${record.id}-${slugify(record.title)}`;
  record.date = $("#record-date").value.trim();
  record.type = $("#record-type").value;
  record.sourceUrl = $("#record-source").value.trim();
  record.summary = $("#record-summary").value.trim();
  record.body = $("#record-body").value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  try {
    record.images = JSON.parse($("#record-images").value || "[]");
    record.links = JSON.parse($("#record-links").value || "[]");
  } catch (error) {
    throw new Error("작품·기록의 이미지 JSON 또는 링크 JSON 형식이 올바르지 않습니다.");
  }
}

async function uploadAsset() {
  const input = $("#asset-file");
  const file = input.files?.[0];
  if (!file) throw new Error("업로드할 사진 파일을 선택하세요.");
  const safeName = file.name.replace(/[^0-9A-Za-z가-힣._-]+/g, "-").replace(/^-+|-+$/g, "");
  const path = `public/assets/uploads/${Date.now()}-${safeName}`;
  const bytes = new Uint8Array(await file.arrayBuffer());
  const result = await github(`contents/${path}`, {
    method: "PUT",
    body: JSON.stringify({
      message: `Upload ${safeName}`,
      content: bytesToBase64(bytes),
      branch: repo.branch,
    }),
  });
  const publicPath = path.replace(/^public/, "");
  state.files.content.data.assets[$("#asset-target").value] = publicPath;
  renderContent();
  input.value = "";
  setStatus(`사진 업로드 완료: ${publicPath}. 전체 저장을 눌러 경로를 확정하세요.`);
  return result;
}

async function connect() {
  state.token = $("#token-input").value.trim();
  if (!state.token) {
    setStatus("토큰을 입력하세요.");
    return;
  }
  sessionStorage.setItem("githubToken", state.token);
  setStatus("GitHub에서 파일을 불러오는 중...");
  await Promise.all(Object.keys(files).map(loadJson));
  $("#auth-panel").classList.add("hidden");
  $("#editor").classList.remove("hidden");
  renderAll();
  setStatus("불러오기 완료");
}

function renderAll() {
  renderContent();
  renderCv();
  renderResearch();
  renderRecordSelect();
}

async function saveAll(event) {
  event.preventDefault();
  try {
    saveCurrentRecord();
    collectContent();
    collectCv();
    collectResearch();
    setStatus("GitHub에 저장하는 중...");
    await saveJson("content", "Update portfolio content");
    await saveJson("cv", "Update portfolio CV");
    await saveJson("research", "Update portfolio research");
    await saveJson("records", "Update portfolio records");
    setStatus("저장 완료. Vercel 배포까지 보통 1-2분 걸립니다.");
  } catch (error) {
    setStatus(error.message);
  }
}

function bindActions() {
  $("#connect-button").addEventListener("click", () => connect().catch((error) => setStatus(error.message)));
  $("#editor-form").addEventListener("submit", saveAll);
  $("#reload-button").addEventListener("click", () => connect().catch((error) => setStatus(error.message)));
  $("#upload-button").addEventListener("click", () => uploadAsset().catch((error) => setStatus(error.message)));
  $("#add-cv-button").addEventListener("click", () => {
    $("#cv-list").append(repeatItem("cv", Date.now(), [
      ["year", "연도", ""],
      ["title", "제목", ""],
      ["organization", "기관/매체", ""],
      ["detail", "설명", "", "textarea"],
    ]));
  });
  $("#add-research-button").addEventListener("click", () => {
    $("#research-list").append(repeatItem("research", Date.now(), [
      ["title", "제목", ""],
      ["period", "기간", ""],
      ["status", "상태", "진행 중"],
      ["summary", "요약", "", "textarea"],
      ["questions", "질문", "", "textarea"],
    ]));
  });
  $("#record-select").addEventListener("change", () => {
    try {
      saveCurrentRecord();
    } catch (error) {
      setStatus(error.message);
      $("#record-select").value = String(state.recordIndex);
      return;
    }
    state.recordIndex = Number($("#record-select").value);
    renderRecord();
  });
  $("#add-record-button").addEventListener("click", () => {
    saveCurrentRecord();
    const id = Date.now();
    const record = {
      id,
      slug: `${id}-새-기록`,
      title: "새 기록",
      originalTitle: "새 기록",
      date: new Date().toISOString(),
      sourceUrl: "",
      type: "게재",
      summary: "",
      body: [],
      images: [],
      links: [],
    };
    state.files.records.data.unshift(record);
    state.recordIndex = 0;
    renderRecordSelect();
  });
  $("#delete-record-button").addEventListener("click", () => {
    if (!confirm("현재 기록을 삭제할까요?")) return;
    state.files.records.data.splice(state.recordIndex, 1);
    state.recordIndex = 0;
    renderRecordSelect();
  });
}

bindTabs();
bindActions();

if (state.token) {
  $("#token-input").value = state.token;
}
