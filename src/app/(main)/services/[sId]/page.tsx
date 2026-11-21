import Container from "@/components/ui/common/Container";
import ServiceShowLeft from "./_components/ServiceShowLeft";
import ServiceShowRight from "./_components/ServiceShowRight";
import { showServiceAction } from "@/lib/service/serviceActions";
import EmptyData from "@/components/ui/common/EmptyData";

type ServiceDetailsPageProps = {
  params: Promise<{ sId: string }>;
};

async function ServiceDetailsPage(props: ServiceDetailsPageProps) {
  const { sId } = await props.params;
  const resData = await showServiceAction(sId);
  if (!resData.isSuccess) {
    return (
      <Container>
        <EmptyData message="No service found!" />
      </Container>
    );
  }
  const service = resData.data;

  return (
    <Container className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-12">
      <ServiceShowLeft service={service} />
      <ServiceShowRight service={service} />
    </Container>
  );
}

export default ServiceDetailsPage;
