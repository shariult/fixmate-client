import Container from "@/components/ui/common/Container";
import EmptyData from "@/components/ui/common/EmptyData";
import { getCurrentUser } from "@/lib/authActions";
import UsersTable from "./_components/UsersTable";
import { listUsersAction } from "@/lib/adminActions";

async function AdminUsersList() {
  const userData = await getCurrentUser();
  const resData = await listUsersAction();
  if (!resData.isSuccess) {
    return (
      <Container>
        <EmptyData />
      </Container>
    );
  }

  const cUser = userData?.user;
  const users = resData.data;
  const usersCount = users.reduce(
    (acc, next) => {
      return {
        ...acc,
        [next.role]: acc[next.role] + 1,
      };
    },
    {
      customer: 0,
      technician: 0,
      admin: 0,
    },
  );

  return (
    <main className="flex-1 p-4 md:p-8">
      <div>
        <h1 className="heading-2">Manage Users</h1>
        <p className="mt-1 text-muted">
          {users.length} accounts. Change a role from the dropdown. You can't
          change your own.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="badge badge-soft badge-primary py-3">
          Customers: {usersCount.customer}
        </span>
        <span className="badge badge-soft badge-secondary py-3">
          Technicians: {usersCount.technician}
        </span>
        <span className="badge badge-soft badge-accent py-3">
          Admins: {usersCount.admin}
        </span>
      </div>

      <div className="mt-6 hidden overflow-x-auto rounded-2xl border border-base-300 bg-base-50 md:block">
        <UsersTable
          users={users}
          usersCount={usersCount}
          currentUser={cUser!}
        />
      </div>
    </main>
  );
}

export default AdminUsersList;
