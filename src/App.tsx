import Table from "./lib/Table";

function App() {
  return (
    <div className="h-screen w-full bg-gray-light p-6">
      <Table
        menuItems={[
          "Archive",
          "Share",
          "Download",
          "Detail",
          "Tag",
          "Edit",
          "Delete",
        ]}
        filterKeys={["department", "paymentDate", "paymentStatus"]}
      />
    </div>
  );
}

export default App;
