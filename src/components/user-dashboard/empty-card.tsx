type EmptyCardProps = {
  searchTerm?: string;
};
export const EmptyCard = ({ searchTerm }: EmptyCardProps) => {
  return (
    <div>
      <div>Icon: Search</div>
      <div>No users found</div>
      <div>
        {searchTerm
          ? `No results for "${searchTerm}". Try a different search.`
          : "No users available at the moment."}
      </div>
    </div>
  );
};
