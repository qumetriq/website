export default function ProductPreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <p className="text-sm text-[var(--primary)]">JOURNALEA</p>

      <h3 className="mt-3 text-2xl font-semibold">Trading Analytics</h3>

      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span>Win Rate</span>
          <span>63.4%</span>
        </div>

        <div className="flex justify-between">
          <span>Profit Factor</span>
          <span>2.18</span>
        </div>

        <div className="flex justify-between">
          <span>Average R</span>
          <span>1.46</span>
        </div>
      </div>
    </div>
  );
}
