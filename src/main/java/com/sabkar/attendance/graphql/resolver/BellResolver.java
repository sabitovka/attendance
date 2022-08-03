package com.sabkar.attendance.graphql.resolver;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.sabkar.attendance.entity.transfer.BellDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class BellResolver implements GraphQLResolver<BellDto> {

}
