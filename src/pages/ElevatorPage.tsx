import { useState } from "react";

const ElevatorPage = () => {
  const [stationName, setStationName] = useState("");
  const [elevatorData, setElevatorData] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  const SERVICE_KEY = process.env.REACT_APP_API_KEY as string;
  const handleSearch = async () => {
    if (!stationName.trim()) {
      setErrorMsg("역 이름을 입력해주세요.");
      setElevatorData([]);
      return;
    }

    const baseUrl = "https://apis.data.go.kr/B553766/wksn/getWksnElvtr";
    const params = new URLSearchParams({
      serviceKey: SERVICE_KEY,
      stnNm: stationName.trim(),
      numOfRows: "100",
      pageNo: "1",
      _type: "json",
    });

    try {
      const response = await fetch(`${baseUrl}?${params.toString()}`);

      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

      const data = await response.json();
      const items = data?.response?.body?.items?.item;

      if (!items || items.length === 0) {
        setElevatorData([]);
        setErrorMsg(`"${stationName}" 역에 대한 엘리베이터 정보가 없습니다.`);
        return;
      }

      const results = items.map(
        (item: any, index: number) =>
          `${index + 1}. ${item.dtlPstn} (${item.fcltNm})`
      );
      setElevatorData(results);
      setErrorMsg("");
    } catch (error) {
      console.error(error);
      setElevatorData([]);
      setErrorMsg("API 호출 중 오류가 발생했습니다.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>지하철 엘리베이터 위치 조회</h2>
      <input
        type="text"
        placeholder="역 이름 입력 (예: 혜화)"
        value={stationName}
        onChange={(e) => setStationName(e.target.value)}
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
          marginRight: "0.5rem",
          width: "200px",
        }}
      />
      <button onClick={handleSearch} style={{ padding: "0.5rem 1rem" }}>
        조회
      </button>

      <div style={{ marginTop: "1.5rem" }}>
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

        {elevatorData.length > 0 && (
          <ul>
            {elevatorData.map((info, idx) => (
              <li key={idx}>{info}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ElevatorPage;
