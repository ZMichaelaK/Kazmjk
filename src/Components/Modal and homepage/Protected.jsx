function Protected() {
  return (
    <Route
      path="/App"
      element={
        <Protected isLoggedIn={isLoggedIn}>
          <Profile />
        </Protected>
      }
    />
  );
}

export default Protected;
