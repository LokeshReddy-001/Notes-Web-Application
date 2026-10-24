const driveFolder = (id) => `https://drive.google.com/drive/folders/${id}?usp=drive_link`;
const driveFile = (id) => `https://drive.google.com/file/d/${id}/view?usp=drive_link`;
const googleDoc = (id) => `https://docs.google.com/document/d/${id}/edit?usp=drive_link`;

const units = (ids, makeUrl = driveFolder) =>
  ids.map((id, index) => ({
    title: `Unit ${index + 1}`,
    category: `Unit ${index + 1}`,
    url: makeUrl(id),
  }));

export const semester3Resources = {
  COA: [
    ...units([
      "1bdMapa7_llXsdfnOo_614v5fSHKo8F4o",
      "11IuneRB_4_BOHW1G82pG9l971qzi9IFf",
      "1IMIGmQnL4QK1gfvd2cyVhiFDY46luDlt",
      "1DhtIj5OPCkWX3xvw-Rwq-Lsbto3pj6hV",
      "1mk2Guj91f9doGFVov8_IfDZUBrSi_YcK",
    ]),
    {
      title: "Previous Year Questions",
      category: "PYQ",
      url: driveFolder("1QzldYfFJNzPKU-LKTFvLD0aSzkzvCvoc"),
    },
  ],
  DBMS: [
    ...units([
      "1frS3w5_29jarZUcqkKx9sgmQYkVBdjgc",
      "1ewzSjcMlCZ0b0JV0u45VdGoAUMz0-xFy",
    ]),
    { title: "Unit 3", category: "Unit 3", url: driveFile("13t2GtrhbIwqZgwCvtPIm5JyZa8yccLyE") },
    { title: "Unit 4", category: "Unit 4", url: driveFolder("1EzUHDaEAI2A_bOM76vk8pRYi3H-1SnK2") },
    { title: "Unit 5", category: "Unit 5", url: driveFolder("1CR9ryC1Ok_EtE6OM-3309QCnQrA1s5w9") },
  ],
  DM: units([
    "1GcFawwHRKQqBo38EKiz2-I20xMmy2arF",
    "1VDr3HjeXqa3-X13m39786OzNEBWUHdXS",
    "17fJrte1ClsATjieiFjkYjbFEeoDO0gmJ",
    "1PZLtp8tbaJj60k6x_ojdG3fSCShXAUCB",
    "18iiQ2LDqZZnLYvKvym53-UN_zpxNQEj0",
  ], driveFile),
  SE: [
    { title: "Unit 1", category: "Unit 1", url: googleDoc("1xCote8PYMTgo5K4GVJjSK4QTGxac5X_JApBodSttN4M") },
    { title: "Unit 2", category: "Unit 2", url: googleDoc("1nrLi6W4u2m9zej8Av0V1Kpmls2yug0EftydxC2BxO_4") },
    { title: "Unit 3", category: "Unit 3", url: driveFolder("1K4r9yXFugkRf9lkNf0504fjUNvc5cUqR") },
    { title: "Unit 4", category: "Unit 4", url: googleDoc("1xU4khVxgPimYLPyR9ixrGsqeDYP4QNVxnxhrU2r81kQ") },
    { title: "Unit 5", category: "Unit 5", url: googleDoc("1aLetEXviFjGuVjkLWsSGW3XTX_Sx4PvmRPg7bf2PJkY") },
  ],
  ES: [
    { title: "Unit 1", category: "Unit 1", url: driveFile("1stvP--zLw-9zNNY97kG0HCDug_ZQM1Qi") },
    { title: "Unit 2", category: "Unit 2", url: driveFile("1SyRxex4Qguz8t80ovUTPohiA71ggFQOP") },
    { title: "Unit 3", category: "Unit 3", url: driveFolder("1--9-fMplxCjW6oJVtFfjQgZQWdLzKCK-") },
    { title: "Unit 4", category: "Unit 4", url: driveFile("1EgLh2fXyIDRW_ejU1ah2wywfC85zJVYG") },
    { title: "Unit 5", category: "Unit 5", url: driveFile("1b2xzlTS15atfh1OMm1DcGXlKrmbyJSvq") },
  ],
  IE: [{ title: "Unit 1", category: "Unit 1", url: driveFolder("1s1A6qBCkT21dRotlIuTI92VQSVJ5xuLM") }],
  JAVA: units([
    "1FMkeX82c46oprnYGtcjUTpDdTNIRXV8V",
    "1__a0K-BdnJrpHbVweeixq_fHNgRFIqbH",
    "1gqmCVtwlDuOUdvtl5-lVZKaao4cfT1PC",
    "1NDtbB-2nFzvIie8fUzxEsUtenLj6Edfj",
    "1uIKSOqMa8VhI5l_LRhUVxQ_rkQSXO26q",
  ]),
};

// CSM lists this subject as OOPS / JAVA; it uses the supplied Java unit folders.
semester3Resources["OOPS / JAVA"] = semester3Resources.JAVA;

export function resourceType(url) {
  if (url.includes("docs.google.com/document/")) return "DOC";
  if (url.includes("/folders/")) return "FOLDER";
  return "PDF";
}
