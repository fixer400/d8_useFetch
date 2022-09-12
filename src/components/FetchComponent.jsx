import useJsonFetch from "../hooks/useJsonFetch"
export default function OkComponent(props){
  const [{data, isLoading, hasError}] = useJsonFetch(
    props.url,
    props.method
  )
  return(
    <div>
      {isLoading ? 
      <div>loading</div> 
      : 
      <div>{hasError == null? <span>{data.status}</span> : <span>{hasError}</span> }</div>}
  </div>
  )
}