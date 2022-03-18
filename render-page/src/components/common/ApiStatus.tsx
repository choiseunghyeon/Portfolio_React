function ApiStatus({ status }: any) {
  if (status === "loading") {
    return <>"Loading..."</>;
  }

  if (status === "error") {
    return <>"error"</>;
  }

  return <>"알 수 없는 status입니다."</>;
}

export default ApiStatus;
