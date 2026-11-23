import Container from "@/components/ui/common/Container";
import ServiceShowLeft from "./_components/ServiceShowLeft";
import ServiceShowRight from "./_components/ServiceShowRight";
import { getServiceAction } from "@/lib/serviceActions";
import EmptyData from "@/components/ui/common/EmptyData";
import Breadcrumbs from "@/components/ui/common/Breadcrumbs";

type ServiceDetailsPageProps = {
  params: Promise<{ sId: string }>;
};

async function ServiceDetailsPage(props: ServiceDetailsPageProps) {
  const { sId } = await props.params;
  const resData = await getServiceAction(sId);

  if (!resData.isSuccess) {
    return (
      <Container>
        <EmptyData message="Something went wrong!" isError />
      </Container>
    );
  }

  const crumbs = [
    {
      id: 1,
      label: resData.data.title,
    },
  ];

  const service = resData.data;
  return (
    <>
      <Container spaceY="pt-6 -mb-4">
        <Breadcrumbs data={crumbs} />
      </Container>
      <Container className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-12">
        <ServiceShowLeft service={service} />
        <ServiceShowRight service={service} />
      </Container>
    </>
  );
}

export default ServiceDetailsPage;
