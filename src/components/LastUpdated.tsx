interface LastUpdatedProps {
  date: string;
}

export default function LastUpdated({ date }: LastUpdatedProps) {
  return (
    <div className="mt-16 pt-8 border-t border-white/10">
      <p className="text-sm text-gray-500">
        Last updated: {date}
      </p>
    </div>
  );
}
