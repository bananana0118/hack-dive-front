export default function AiDialog({ data, isLoading = false }) {
  const { name, content, last } = data;
  console.log(data.content);

  return (
    <div className={`whitespace-pre-wrap p-2 ${!last ? "mb-2" : ""} `}>
      <div className="w-fit max-w-80 rounded-3xl rounded-bl-none border border-[#4E6A97] bg-[#081425] p-8 text-[#84B8E7]">
        {isLoading ? (
          <img src="/loading.gif" alt="Loading..." className="size-16" />
        ) : (
          content
        )}
      </div>
      :
    </div>
  );
}
