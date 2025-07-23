export const formatDate = (timestamp?: number): string => {
  // timestamp  秒 * 1000 轉成毫秒
  const now = timestamp ? new Date(timestamp * 1000) : new Date();

  const year: number = now.getFullYear();
  const month: string = String(now.getMonth() + 1).padStart(2, '0'); // 月份從 0 開始
  const day: string = String(now.getDate()).padStart(2, '0');
  const hours: string = String(now.getHours()).padStart(2, '0');
  const minutes: string = String(now.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}